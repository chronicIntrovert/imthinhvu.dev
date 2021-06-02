import { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import mailgo from 'mailgo';

export default function Home() {
  useEffect(() => {
    mailgo();
  }, []);

  return (
    <Layout>
      <div className="self-center">
        <h1 className="text-4xl">
          hi, i'm <span className="border-solid border-green-300 border-b-4 mr-1">thinh vu</span>
        </h1>
        <p className="my-4">
          i'm a front-end developer and i build <span className="italic">beautiful</span> and{' '}
          <span className="font-bold">performant</span> web solutions.
        </p>
        <button
          className="rounded-md text-white bg-green-300 py-3 px-8 hover:bg-green-200 focus:outline-none focus:border-solid focus:border-green-600 focus:border-2"
          href="#mailgo"
          data-address="thinh.vu"
          data-domain="hey.com"
        >
          say hello
        </button>
      </div>
    </Layout>
  );
}
