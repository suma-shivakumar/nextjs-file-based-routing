import { createContext } from "react";

const NotificationContext = createContext({
  notification: null, //{title,message,status}
  showNotification: function () {},
  hideNotification: function () {},
});

function NotificationContextProvider(props) {
  return (
    <NotificationContext.Provider>
      {props.children}
    </NotificationContext.Provider>
  );
}

export default NotificationContext;
