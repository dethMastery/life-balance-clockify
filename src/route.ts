import exp from 'express'

export function page(app: any, root: string) {
  app.get("/", (req: exp.Request, res: exp.Response) => {
    res.send('a')
  });
}
