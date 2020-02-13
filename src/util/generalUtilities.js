export const classesComb = classesCollection => classesCollection.join(' ')

export const sleep = ms => {
  return new Promise(resolve => setTimeout(resolve, ms))
}
