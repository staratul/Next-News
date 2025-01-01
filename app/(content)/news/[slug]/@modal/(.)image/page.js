"use client";

import { notFound, useRouter, useParams } from "next/navigation";
import { DUMMY_NEWS } from "@/dummy-news";

export default function InterceptedImagePage() {
    const router = useRouter();
    const { slug } = useParams();

    const newsItem = DUMMY_NEWS.find(newsItem => newsItem.slug === slug);

    if (!newsItem) {
        notFound();
    }

    return (
        <>
            <div className="modal-backdrop" onClick={router.back} />
            <dialog className="modal" open>
                <div className="fullscreen-image">
                    <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
                </div>
            </dialog>
        </>
    );
}
