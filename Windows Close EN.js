// The english version of the Window Widget for ventilating a room by iOS Reminders
// Script by Robin Stecher

let minutes = 5

manageInfoWidget()
if(!config.runsInWidget) {
  manageReminder()
}

Script.setWidget(await manageHomeWidget())
Script.complete()

async function manageInfoWidget() {
  let widget = new ListWidget()
  widget.backgroundColor = Color.blue()
  let title = widget.addText("⚗️ Close".toUpperCase())
  title.font = Font.boldRoundedSystemFont(22)
  title.textColor = Color.white()
  widget.addSpacer()
  let description = widget.addText("✅ Created reminder")
  description.font = Font.mediumSystemFont(14)
  description.textColor = Color.white()
  widget.presentSmall()
}

async function manageHomeWidget() {
  let widget = new ListWidget()
  widget.backgroundColor = Color.blue()
  let title = widget.addText("🚪 Close".toUpperCase())
  title.font = Font.boldRoundedSystemFont(22)
  widget.addSpacer()
  let description = widget.addText("Remind me on closing the window")
  description.font = Font.mediumSystemFont(14)
  title.textColor = Color.white()
  description.textColor = Color.white()
  return widget
}

async function getWindowIcon() {
  let url = "https://icon-library.com/images/open-window-icon/open-window-icon-5.jpg"
  let req = new Request(url)
  return req.loadImage()
}

async function manageReminder() {
  let reminder = new Reminder()
  reminder.calendar = await getCalendar()
  reminder.title = "Close the window"
  reminder.dueDate = await getReminderDate()
  reminder.save()
}

async function getCalendar() {
  let c = Calendar.findOrCreateForReminders("Ventilate")
  return c
}

async function getReminderDate() {
  let d = new Date(Date.now() + (1000 * 60 * minutes))
  return d
}

