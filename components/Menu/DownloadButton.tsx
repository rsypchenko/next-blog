import Link from "next/link";

export const DownloadButton = () => {
  return (
    <div className="flex">
      <Link href="/cv.pdf" legacyBehavior>
        <a target={'_blank'} className="text-white b-2 shadow-xl px-4 py-2 border-2 uppercase hover:bg-violet-500 hover:scale-110 transition-all">
          Download CV
        </a>
      </Link>
    </div>
  );
};
