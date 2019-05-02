import { HasElectronicMail, HasAddress, HasGreenCar } from "./01-first-steps";

const createRequest = (
  method: 'GET' | 'POST',
  ...other: (HasAddress | HasGreenCar)[]
): void => {
  if (method === 'GET') {
    (other as HasAddress[]).map(o => console.log(o))
  } else {
    (other as HasGreenCar[]).map(o => console.log(o))
  }
}

const sendMessage = (receiver: HasElectronicMail): {subject: string; time: number} => {
  return {
    subject: `${receiver.name}: <${receiver.email}>`,
    time: +new Date()
  }
}

const getGreetingMessage = (whom: {name: string}): string => {
  return `Welcome ${whom.name}`
}