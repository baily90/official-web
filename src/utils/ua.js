export const isMobile = () => /Android|webOS|iPhone|iPod|BlackBerry|iPad/i.test(navigator.userAgent)

export const isPc = () => !isMobile()
