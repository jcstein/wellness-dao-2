import {
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useCatch,
} from "remix";
import type { LinksFunction } from "remix";

import globalStylesUrl from "~/styles/global.css";
import darkStylesUrl from "~/styles/dark.css";

// https://remix.run/api/app#links
export let links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: globalStylesUrl },
    {
      rel: "stylesheet",
      href: darkStylesUrl,
      media: "(prefers-color-scheme: dark)",
    },
  ];
};

// https://remix.run/api/conventions#default-export
// https://remix.run/api/conventions#route-filenames
export default function App() {
  return (
    <Document>
      <Layout>
        <Outlet />
      </Layout>
    </Document>
  );
}

// https://remix.run/docs/en/v1/api/conventions#errorboundary
export function ErrorBoundary({ error }: { error: Error }) {
  console.error(error);
  return (
    <Document title="Error!">
      <Layout>
        <div>
          <h1>There was an error</h1>
          <p>{error.message}</p>
          <hr />
          <p>
            Hey, developer, you should replace this with what you want your
            users to see.
          </p>
        </div>
      </Layout>
    </Document>
  );
}

// https://remix.run/docs/en/v1/api/conventions#catchboundary
export function CatchBoundary() {
  let caught = useCatch();

  let message;
  switch (caught.status) {
    case 401:
      message = (
        <p>
          Oops! Looks like you tried to visit a page that you do not have access
          to.
        </p>
      );
      break;
    case 404:
      message = (
        <p>Oops! Looks like you tried to visit a page that does not exist.</p>
      );
      break;

    default:
      throw new Error(caught.data || caught.statusText);
  }

  return (
    <Document title={`${caught.status} ${caught.statusText}`}>
      <Layout>
        <h1>
          {caught.status}: {caught.statusText}
        </h1>
        {message}
      </Layout>
    </Document>
  );
}

function Document({
  children,
  title,
}: {
  children: React.ReactNode;
  title?: string;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        {title ? <title>{title}</title> : null}
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  );
}

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="remix-app">
      <header className="remix-app__header">
        <div className="container remix-app__header-content">
          <Link to="/" title="Remix" className="remix-app__header-home-link">
            <RemixLogo />
          </Link>
          <nav aria-label="Main navigation" className="remix-app__header-nav">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <a href="https://checkpoint.carrd.co/">Get Help Now</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <div className="remix-app__main">
        <div className="container remix-app__main-content">{children}</div>
      </div>
      <footer className="remix-app__footer">
        <div className="container remix-app__footer-content">
          <a href="https://twitter.com/wellness_dao">
            follow Wellness DAO on Twitter
          </a>
        </div>
      </footer>
    </div>
  );
}

function RemixLogo() {
  return (
    <svg
      viewBox="0 0 700 155.14"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      aria-labelledby="wellness-dao"
      role="img"
      width="106"
      height="30"
      fill="currentColor"
    >
      <title id="wellness0d">Wellness DAO</title>
      <path
        class="cls-1"
        d="M23.74,64.94,38.2,96.67l15-31.73h13.4l15,32.67L96.85,64.94h23.62L89,125.23H74.75l-15-33-14.34,33H30.91L0,64.94Z"
      />
      <path
        class="cls-1"
        d="M144.1,98.67q0,13.76,12.92,13.75a11.57,11.57,0,0,0,10.47-5.64h20.56q-6.23,20.68-31.14,20.68a40.86,40.86,0,0,1-14-2.29,31.2,31.2,0,0,1-10.87-6.52,28.93,28.93,0,0,1-7-10.11,33.59,33.59,0,0,1-2.47-13.16,37.21,37.21,0,0,1,2.35-13.58,28.47,28.47,0,0,1,6.7-10.28A29.44,29.44,0,0,1,142.16,65a39.69,39.69,0,0,1,13.92-2.3A38.93,38.93,0,0,1,169.84,65a27.74,27.74,0,0,1,10.34,6.64,28.87,28.87,0,0,1,6.46,10.63,42.17,42.17,0,0,1,2.24,14.17v2.23ZM169,86.33a12.72,12.72,0,0,0-4.35-7.17,13.46,13.46,0,0,0-16-.12,11.68,11.68,0,0,0-3.94,7.29Z"
      />
      <path class="cls-1" d="M222.25,27.68v97.55H201V27.68Z" />
      <path class="cls-1" d="M258.1,27.68v97.55H236.83V27.68Z" />
      <path
        class="cls-1"
        d="M272.67,64.94H294v7.64q4.33-5.3,8.81-7.11a27.5,27.5,0,0,1,10.46-1.83,26.13,26.13,0,0,1,10.87,2.06,21.57,21.57,0,0,1,7.7,5.82,16.73,16.73,0,0,1,3.53,6.81,35.91,35.91,0,0,1,.94,8.59v38.31H315V94.79a32.8,32.8,0,0,0-.65-7.23,9,9,0,0,0-2.29-4.41,8,8,0,0,0-3.18-2,11.57,11.57,0,0,0-3.76-.59q-5.4,0-8.28,3.23C294.9,86,294,89,294,93v32.2H272.67Z"
      />
      <path
        class="cls-1"
        d="M369.87,98.67q0,13.76,12.93,13.75a11.55,11.55,0,0,0,10.46-5.64h20.57q-6.24,20.68-31.15,20.68a40.84,40.84,0,0,1-14-2.29,31.24,31.24,0,0,1-10.88-6.52,29.2,29.2,0,0,1-7-10.11,33.77,33.77,0,0,1-2.47-13.16,37.21,37.21,0,0,1,2.35-13.58,28.6,28.6,0,0,1,6.7-10.28A29.62,29.62,0,0,1,367.93,65a39.74,39.74,0,0,1,13.93-2.3A38.88,38.88,0,0,1,395.61,65,27.74,27.74,0,0,1,406,71.64a28.89,28.89,0,0,1,6.47,10.63,42.18,42.18,0,0,1,2.23,14.17v2.23Zm24.92-12.34a12.83,12.83,0,0,0-4.35-7.17,13.46,13.46,0,0,0-16-.12,11.68,11.68,0,0,0-3.94,7.29Z"
      />
      <path
        class="cls-1"
        d="M466.72,80.45a24.85,24.85,0,0,0-11.52-3.06,8.67,8.67,0,0,0-4.76,1.18,3.59,3.59,0,0,0-1.82,3.17,4.11,4.11,0,0,0,.29,1.71,3.07,3.07,0,0,0,1.29,1.23,11.25,11.25,0,0,0,2.94,1.06c1.29.31,3,.71,5.11,1.18q8.82,1.76,13.17,6.28a16,16,0,0,1,4.35,11.58,21,21,0,0,1-2.12,9.52,20.23,20.23,0,0,1-5.88,7.11,27.91,27.91,0,0,1-9,4.47,40.35,40.35,0,0,1-11.64,1.58,47.34,47.34,0,0,1-24.1-6.93l7.76-15q8.94,6.11,16.93,6.11a8.3,8.3,0,0,0,4.82-1.3,3.86,3.86,0,0,0,1.88-3.29,5.38,5.38,0,0,0-.3-1.94,3.25,3.25,0,0,0-1.23-1.41,9.88,9.88,0,0,0-2.76-1.17c-1.22-.35-2.81-.73-4.76-1.12q-9.88-2-13.81-5.93t-3.94-10.88a21.28,21.28,0,0,1,1.88-9.1,18.69,18.69,0,0,1,5.41-6.88,25.37,25.37,0,0,1,8.52-4.35,37.8,37.8,0,0,1,11.1-1.53,50.55,50.55,0,0,1,19.4,3.88Z"
      />
      <path
        class="cls-1"
        d="M526.54,80.45A24.85,24.85,0,0,0,515,77.39a8.67,8.67,0,0,0-4.76,1.18,3.59,3.59,0,0,0-1.82,3.17,4.28,4.28,0,0,0,.29,1.71,3,3,0,0,0,1.3,1.23A11,11,0,0,0,513,85.74c1.3.31,3,.71,5.12,1.18q8.8,1.76,13.16,6.28a16,16,0,0,1,4.35,11.58,21,21,0,0,1-2.12,9.52,20.31,20.31,0,0,1-5.87,7.11,28.06,28.06,0,0,1-9.05,4.47,40.35,40.35,0,0,1-11.64,1.58,47.28,47.28,0,0,1-24.09-6.93l7.75-15q8.94,6.11,16.93,6.11a8.28,8.28,0,0,0,4.82-1.3A3.86,3.86,0,0,0,514.2,107a5.38,5.38,0,0,0-.3-1.94,3.19,3.19,0,0,0-1.23-1.41,9.88,9.88,0,0,0-2.76-1.17c-1.22-.35-2.8-.73-4.76-1.12q-9.87-2-13.81-5.93T487.4,84.56a21.43,21.43,0,0,1,1.88-9.1,18.79,18.79,0,0,1,5.41-6.88,25.37,25.37,0,0,1,8.52-4.35,37.82,37.82,0,0,1,11.11-1.53,50.5,50.5,0,0,1,19.39,3.88Z"
      />
      <image
        width="66"
        height="66"
        transform="translate(544.86 0) scale(2.35)"
        xlink:href="data:image/png;base64,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"
      />
    </svg>
  );
}
