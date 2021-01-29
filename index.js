const core = require("@actions/core");
const AWS = require("aws-sdk");

// // Uncomment me to use local credentials:
// const credentials = new AWS.SharedIniFileCredentials();
// AWS.config.credentials = credentials;

(async () => {
  try {
    const ssm = new AWS.SSM();
    if (!ssm.config.credentials) {
      throw new Error(
        "No credentials. Try adding @aws-actions/configure-aws-credentials earlier in your job to set up AWS credentials.",
      );
    }
    const prefix = core.getInput("prefix");
    const Path = core.getInput("path", { required: true });
    const WithDecryption = core.getInput("decrypt") === "true";
    const { Parameters } = await ssm.getParametersByPath({ Path, WithDecryption }).promise();

    Parameters.forEach(({ Name, Value, Type }) => {
      const variable = prefix + Name.toUpperCase().replace(/^\//, "").replace(/\//g, "_");
      // If we are decrypting SecureStrings, make sure the decrypted value isn't getting printed in the logs
      // (see https://docs.github.com/en/actions/reference/workflow-commands-for-github-actions#masking-a-value-in-log)
      if (WithDecryption && Type === "SecureString") {
        core.setSecret(Value);
      }
      core.exportVariable(variable, Value);
      core.info(`Exported variable ${variable} (${Value})`);
    });
  } catch (error) {
    core.setFailed(error.message);
  }
})();
