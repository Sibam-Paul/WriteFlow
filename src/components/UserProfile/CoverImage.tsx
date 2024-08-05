import { updateUserCoverImage } from "@/actions/image.action";
import { auth } from "@/auth";
import FileUploader from "@/lib/fileUploader";
import CurrentUserOnly from "@/util/CurrentUserOnly";
import { Pencil } from "lucide-react";
import Image from "next/image";
import React from "react";

type props = {
  coverImage: string;
  userId?: string | null;
  flowId?: string | null
  uploadImageAction: (url: string, id: string) => Promise<{ error: string; success?: undefined; } | { success: string; error?: undefined; }>;
  flowMode: boolean;
};

const CoverImage = async ({ coverImage, userId, flowId, flowMode, uploadImageAction }: props) => {
  return (
    <div className="mt-5 group relative">
      <Image
        className="h-[230px] w-full rounded-t-2xl object-cover object-center"
        src={coverImage}
        height={800}
        width={900}
        alt="Holla"
      />
      {/* @ts-expect-error Async Server Component */}
      <CurrentUserOnly userId={userId}>
        <div className="absolute right-5 bottom-5">
          <FileUploader
            ctx_name="CoverImage"
            userId={userId}
            flowId={flowId}
            uploadImageAction={uploadImageAction}
            flowMode={flowMode}
          />
        </div>
      </CurrentUserOnly>
    </div>
  );
};

export default CoverImage;
