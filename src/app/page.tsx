import BaseTemplate from "@/components/BaseTemplate";
import IntroCard from "@/components/IntroCard";

export default function Home() {
  return (
    <BaseTemplate>
      <main className="mx-auto min-h-screen w-full max-w-screen-lg">
        <IntroCard />
        <br />
      </main>
    </BaseTemplate>
  );
}