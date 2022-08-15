import { useRouter } from 'next/router';
import * as React from 'react';

export interface IPostDetailPageProps {
}

export default function PostDetailPage(props: IPostDetailPageProps) {
    const param = useRouter()
    console.log(param);
    return (
        <div>
            Hello Post 1
        </div>
    );
}
