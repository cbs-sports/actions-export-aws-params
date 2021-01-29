# Export AWS SSM Parameters

This GitHub action retrieves values from AWS SSM Parameter Store for a given path and sets them as environment variables for use in subsequent actions.

## Inputs

### `path`

**Required**. The path name or hierarchy under which to retrieve information about one or more parameters.

> Be advised that any forward slashes [`/`] in your parameter names will be converted to underscores [`_`] (leading slash excluded), and any lowercased characters will be converted to uppercase.

### `decrypt`

A Boolean value indicating whether to decrypt any `SecureString` parameter values. The default value is `false`.

### `prefix`

An optional prefix to add to the variable name. For example, using `prefix: REACT_APP_` with a parameter named `/myapp/var` will export a variable named `$REACT_APP_MYAPP_VAR`.

## Usage

```yml
- name: Get AWS SSM Parameter Store values
  uses: cbs-sports/actions-export-aws-params@v1
  with:
    path: "/your/param/path" # The path under which to retrieve params
    prefix: "REACT_APP_" # An optional prefix to add to the env var name
    decrypt: true # Whether to decrypt `SecureString` values (default is false)
```

It is recommended to use the [`configure-aws-credentials`](https://github.com/marketplace/actions/configure-aws-credentials-action-for-github-actions) prior to this action in order to access your Parameter Store:

```yml
jobs:
  deploy:
    name: Deploy my CDK Stack
    runs-on: ubuntu-latest

    steps:
      - name: Checkout
        uses: actions/checkout@v2

      - name: Configure AWS credentials
        uses: aws-actions/configure-aws-credentials@v1
        with:
          aws-access-key-id: ${{ secrets.TEST_AWS_ACCESS_KEY_ID }}
          aws-secret-access-key: ${{ secrets.TEST_AWS_SECRET_ACCESS_KEY }}
          aws-region: us-east-1

      - name: Get AWS SSM Parameter Store values
        uses: cbs-sports/actions-export-aws-params@v1
        with:
          path: /myapp/configs
          decrypt: true

      - name: Deploy CDK
        run: cdk deploy --all
        env:
          ENV_NAME: ${{ env.MYAPP_CONFIGS_ENV_NAME }}
          BASE_URL: ${{ env.MYAPP_CONFIGS_BASE_URL }}
```

You can read more about configuring your AWS credentials [here](https://github.com/marketplace/actions/configure-aws-credentials-action-for-github-actions).
