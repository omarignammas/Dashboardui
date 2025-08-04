import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator,
  } from "@/components/ui/breadcrumb";
  import { Button } from "@/components/ui/button";
  import { Input } from "@/components/ui/input";
  
  const AiPage = () => {
    return (
      <div className="min-h-screen flex flex-col">
        <div className="p-4">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Dashboard</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/aiplan">AI Plan</BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
  
        {/* Main content */}
        <div className="flex-1 flex items-center mb-[25%] justify-center">
          <div className="w-full xl:w-2/3 space-y-8 text-center px-4">
            <h1 className="text-4xl md:text-6xl font-semibold">
              Find Your Way To Finish
            </h1>
  
            <div className="flex w-full max-w-xl mx-auto items-center gap-2">
              <Input type="text" placeholder="Find Your Way" />
              <Button type="submit">
                Ask AiPlan
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default AiPage;
  