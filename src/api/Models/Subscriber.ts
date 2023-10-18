export default interface Subscriber {
    id: number,
    email: string,
    gdpr: boolean,
    marketing: boolean,
    createdAt: Date,
    updatedAt: Date
}