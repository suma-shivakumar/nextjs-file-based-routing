// import { useRouter } from "next/router";
// import { getEventById } from "../../dummy-data";
import { getEventById, getAllEvents } from "../../helpers/api-utils";
import { Fragment } from "react";

import EventLogistics from "../../components/event-detail/event-logistics";
import EventSummary from "../../components/event-detail/event-summary";
import EventContent from "../../components/event-detail/event-content";
import ErrorAlert from "../../components/ui/error-alert";

import Head from "next/head";

function EventDetailPage(props) {
  //   const router = useRouter();

  //   const eventId = router.query.eventId;
  //   const event = getEventById(eventId);

  const event = props.selectedEvent;

  console.log("event", event);
  if (!event) {
    return (
      <ErrorAlert>
        <p>No event found!</p>
      </ErrorAlert>
    );
  }

  return (
    <Fragment>
      <Head>
        <title>{event.title}</title>
        <meta name="description" content={event.description} />
      </Head>

      <EventSummary title={event.title} />

      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </Fragment>
  );
}

export default EventDetailPage;

export async function getStaticProps(context) {
  const eventId = context.params.eventId;

  console.log("eventId", eventId);
  const eventById = await getEventById(eventId);
  return {
    props: {
      selectedEvent: eventById,
    },
    revalidate: 30,
  };
}

export async function getStaticPaths() {
  const events = await getAllEvents();
  const pathsArray = events.map((event) => ({ params: { eventId: event.id } }));
  return {
    paths: pathsArray, //[{ params: { eventId: "e1" } }],
    fallback: false,
  };
}
