import { env } from 'node:process';

export function getAPIKey(cloudflareEnv: Env) {
  console.log(cloudflareEnv);
  /**
   * The `cloudflareEnv` is only used when deployed or when previewing locally.
   * In development the environment variables are available through `env`.
   */
  return env.ANTHROPIC_API_KEY || cloudflareEnv.ANTHROPIC_API_KEY || cloudflareEnv.env.ANTHROPIC_API_KEY;
}
