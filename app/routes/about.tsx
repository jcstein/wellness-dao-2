import { Outlet } from "remix";
import type { MetaFunction, LinksFunction } from "remix";

import stylesUrl from "~/styles/demos/about.css";

export let meta: MetaFunction = () => {
  return {
    title: "About Remix",
  };
};

export let links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: stylesUrl }];
};

export default function Index() {
  return (
    <div className="about">
      <div className="about__intro">
        <h2>About Us</h2>
        <p>
          Ok, so this page isn't really <em>about us</em>, but we did want to
          tell you how this project started.
        </p>
        <p>
          We'll have more coming soon, but <em>for now</em>{" "}
          <a href="https://mirror.xyz/joshcs.eth/gOIvBzBkt5pHL5DxPJTWkIKKXAUmfOAAQS0kZcoWj6Q">
            here's a bit about what spurred the idea
          </a>
          .
        </p>
        <hr />
        <Outlet />
      </div>
    </div>
  );
}
