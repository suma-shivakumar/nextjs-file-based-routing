import { Fragment } from "react";
import EventList from "../../components/events/event-list";
// import { getAllEvents } from "../../dummy-data";
import EventSearch from "../../components/events/event-search";
import { useRouter } from "next/router";
import { getAllEvents } from "../../helpers/api-utils";
import Head from "next/head";

function AllEventsPage(props) {
  //    const allevents = getAllEvents();
  const allevents = props.allEvents;
  const router = useRouter();

  function findEventHandler(year, month) {
    const fullpath = "/events/[y]/[m]";
    router.push({
      pathname: fullpath,
      query: { y: year, m: month },
    });
  }

  return (
    <Fragment>
      <Head>
        <title>All Events Details</title>
      </Head>
      <Head>
        <title>All Events</title>
        <meta
          name="description"
          content="Find alot of great event that allow you to evolve..."
        />
      </Head>

      <EventSearch onSearch={findEventHandler} />
      <EventList items={allevents}></EventList>
    </Fragment>
  );
}

export default AllEventsPage;

export async function getStaticProps() {
  const events = await getAllEvents();
  return {
    props: {
      allEvents: events,
    },
    revalidate: 60,
  };
}
