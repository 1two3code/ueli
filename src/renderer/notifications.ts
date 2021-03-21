import NotificationType from "../common/notification-type";
import vueEventDispatcher from "./vue-event-dispatcher";
import VueEventChannels from "./vue-event-channels";

export default function showNotification(
  message: string,
  notificationType: NotificationType
): void {
  vueEventDispatcher.$emit(
    VueEventChannels.notification,
    message,
    notificationType
  );
}
