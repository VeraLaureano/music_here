import {connect} from "mongoose";

/**
 * @param url -> string
 * @note > call inside an asynchronous function, since it returns a promise
 * @example
 *  const start = async () => {
 *    try {
 *      await connectDB('database_url');
 *    } catch (error) {
 *      console.log(error)
 *    }
 *  }
 * start()
 */

const connectDB: (a: string) => void = (url: string): void => {
    connect(url)
        .then(() => console.log("Connected to the db..."))
        .catch((error) => console.log(error));
}

export default connectDB;