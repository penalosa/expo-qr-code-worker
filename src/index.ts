export interface Env {

}
import page from "./page.html";
export default {
  async fetch(
    request: Request,
    env: Env,
    ctx: ExecutionContext
  ): Promise<Response> {
    return new Response(page, {
      headers: {
        "Content-Type": "text/html"
      }
    });
  }
};
