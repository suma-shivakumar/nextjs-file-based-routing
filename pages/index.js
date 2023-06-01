import EventList from "../components/events/event-list";
import { getFeaturedEvents } from "../helpers/api-utils";
// import {getFeaturedEvents} from '../dummy-data';
import Head from "next/head";

function HomePage(props) {
  // const featuredEvents = getFeaturedEvents();

  return (
    <div>
      <Head>
        <title>NextJs Events</title>
        <meta
          name="description"
          content="Find alot of great event that allow you to evolve..."
        />
      </Head>

      <EventList items={props.events}></EventList>
    </div>
  );
}
export default HomePage;

export async function getStaticProps() {
  const featuredEvents = await getFeaturedEvents();

  return {
    props: {
      events: featuredEvents,
    },
    revalidate: 1800,
  };
}
