import type { MetaFunction, LoaderFunction } from "remix";
import { useLoaderData, json, Link } from "remix";

type IndexData = {
  resources: Array<{ name: string; url: string }>;
  demos: Array<{ name: string; to: string }>;
};

// Loaders provide data to components and are only ever called on the server, so
// you can connect to a database or run any server side code you want right next
// to the component that renders it.
// https://remix.run/api/conventions#loader
export let loader: LoaderFunction = () => {
  let data: IndexData = {
    resources: [
      {
        name: "Get Help Now, access Free Resources Today",
        url: "https://checkpoint.carrd.co/",
      },
      {
        name: "Telegram, join us anonymously",
        url: "https://t.me/joinchat/VVzBgaurKJUyMjZh",
      },
      {
        name: "Discord, join our community",
        url: "https://discord.gg/euvTV2F8",
      },
    ],
    demos: [
      {
        to: "/about",
        name: "About Wellness DAO",
      },
    ],
  };

  // https://remix.run/api/remix#json
  return json(data);
};

// https://remix.run/api/conventions#meta
export let meta: MetaFunction = () => {
  return {
    title: "Remix Starter",
    description: "Welcome to Wellness DAO!",
  };
};

// https://remix.run/guides/routing#index-routes
export default function Index() {
  let data = useLoaderData<IndexData>();

  return (
    <div className="remix__page">
      <main>
        <h2>Welcome to Wellness DAO!</h2>
        <p>We're happy that you're here. 🥳</p>
        <p>
          We are building a DAO dedicated to normalizing Mental-Health Care and
          providing Resources as a Public Good and shatter the stigmas that
          surround getting help.
        </p>
        <p>
          Our goal is to build community-driven wellness. Check out our
          suggested links, and then just delete the{" "}
          <code>app/routes/demos</code> and <code>app/styles/demos</code>{" "}
          folders when you're ready to turn this into your next project.
        </p>
      </main>
      <aside>
        <h2>Resources</h2>
        <ul>
          {data.resources.map((resource) => (
            <li key={resource.url} className="remix__page__resource">
              <a href={resource.url}>{resource.name}</a>
            </li>
          ))}
        </ul>
        <h2>More</h2>
        <ul>
          {data.demos.map((demo) => (
            <li key={demo.to} className="remix__page__resource">
              <Link to={demo.to} prefetch="intent">
                {demo.name}
              </Link>
            </li>
          ))}
        </ul>
      </aside>
    </div>
  );
}
