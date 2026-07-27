// Tracks console activity for inactivity timeout purposes
// This is shared between user interactions (clicks/keydown) and API requests

const LAST_CONSOLE_ACTIVITY_TIMESTAMP_LOCAL_STORAGE_KEY = 'last-console-activity-timestamp';

export const updateLastConsoleActivity = (): void => {
  localStorage.setItem(LAST_CONSOLE_ACTIVITY_TIMESTAMP_LOCAL_STORAGE_KEY, Date.now().toString());
};
