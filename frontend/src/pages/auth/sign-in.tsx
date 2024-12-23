import { Button } from '@/components/ui/button'
// import { Input } from '@/components/ui/input'
// import { Label } from '@/components/ui/label'

export function SignIn() {
  return (
    <>
      <div className="p-8">
        <div className="flex w-[320px] flex-col justify-center gap-6">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tighter">
              Projects made by Lucas D
            </h1>
            <p className="text-sm text-muted-foreground">Click be surprised</p>
          </div>

          <form className="space-y-4">
            {/* <div className="space-y-2">
              <Label htmlFor="acessKey">Your access key</Label>
              <Input id="acessKey" type="password" />
            </div> */}

            <Button className="w-full" type="submit">
              Access
            </Button>
          </form>
        </div>
      </div>
    </>
  )
}
