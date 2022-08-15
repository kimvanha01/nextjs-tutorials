import { useRouter } from 'next/router';
import * as React from 'react';

export interface ITestProps {
}

export default function Test (props: ITestProps) {
    const param = useRouter()
    console.log(param);
  return (
    <div>
      Helllllllppp
    </div>
  );
}
