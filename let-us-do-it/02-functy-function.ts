import { HasElectronicMail } from "./01-first-steps";

const sendMessage = (receiver: HasElectronicMail): {subject: string; time: number} => {
  return {
    subject: `${receiver.name}: <${receiver.email}>`,
    time: +new Date()
  }
}

const getGreetingMessage = (whom: {name: string}): string => {
  return `Welcome ${whom.name}`
}