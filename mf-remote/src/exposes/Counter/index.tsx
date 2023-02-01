import React from 'react';
import { useRequest, request } from '@umijs/max';

export default (props: { init?: number }) => {
  const [c, setC] = React.useState(props.init ?? 10);

  const { data } = useRequest(async () => {
    const res = await request('https://randomuser.me/api?results=1');
    return { data: res }
  });

  return (
    <div>
      <h1> remote Counter</h1>
      <div>
        <button
          data-testid="remote-button"
          onClick={() => {
            setC((c) => c + 1);
          }}
        >
          click to add
        </button>
      </div>
      <div>
        remote hooks counter
        <span data-testid="remote-counter">{c}</span>
      </div>
      <span>
        {data && JSON.stringify(data)}
      </span>
    </div>
  );
};
