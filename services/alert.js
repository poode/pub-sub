exports.processMatch = function processMatch(subscription, signal) {
  opts = {
  from: 'Simple Notification Service',
  to: subscription.user,
  subject: subscription.event + ' happened at: ' + new Date(),
  body: signal.body
  }
  // Send alert
  console.log('Alert sent to subscripers!! ==>', opts)
  }