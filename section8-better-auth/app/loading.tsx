import { Spinner } from "@/components/ui/spinner";

function Loading() {
  return (
    <main className="flex flex-1 justify-center items-center">
      <Spinner className="size-10" />
    </main>
  );
}

export default Loading;
