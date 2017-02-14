import Alt from 'alt';
import 'alt-utils/lib/chromeDebug';
import createLogger from 'alt-logger';
let alt = new Alt();
Alt.debug('alt', alt);
/**
 * The alt-logger is useful for debugging and understanding the update-cycle of alt.js.
 * You can take a look at the logs in the console.
 */
export default (process.env.NODE_ENV === 'development') ? createLogger(alt) : alt;