export default interface IConn {
    connection(): any;
    query(): any;
    close(): void;
}