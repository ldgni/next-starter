"use client";

import { useQuery } from "@tanstack/react-query";
import { Loader } from "lucide-react";
import Image from "next/image";

import { fetchRandomImage } from "@/api/fetch-random-image";
import Button from "@/components/ui/button";

export default function Randomizer() {
  const { data, error, isFetching, refetch } = useQuery({
    queryKey: ["randomImage"],
    queryFn: fetchRandomImage,
  });

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex h-[300px] w-[200px] items-center justify-center">
        {isFetching ? (
          <Loader size={64} />
        ) : error ? (
          <span>Error loading image</span>
        ) : (
          <Image
            src={data ?? ""}
            alt="Random image"
            className="rounded-sm border-2 border-dark dark:border-light"
            width={200}
            height={300}
            priority
          />
        )}
      </div>
      <Button onClick={() => refetch()}>Randomize</Button>
    </div>
  );
}
