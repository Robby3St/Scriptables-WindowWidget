// Variables used by Scriptable.
// These must be at the very top of the file. Do not edit.
// icon-color: purple; icon-glyph: magic;
let minutes = 15

manageInfoWidget()
if(!config.runsInWidget) {
  manageReminder()
}

Script.setWidget(await manageHomeWidget())
Script.complete()

async function manageInfoWidget() {
  let widget = new ListWidget()
  widget.backgroundColor = Color.blue()
  let title = widget.addText("⚗️ Ventilate".toUpperCase())
  title.font = Font.boldRoundedSystemFont(16)
  widget.addSpacer()
  let description = widget.addText("✅ Created reminder")
  description.font = Font.mediumSystemFont(14)
  title.textColor = Color.white()
  description.textColor = Color.white()
  widget.presentSmall()
}

async function manageHomeWidget() {
  let widget = new ListWidget()
  widget.backgroundColor = Color.blue()
  let title = widget.addText("⚗️ Ventilate".toUpperCase())
  title.font = Font.boldRoundedSystemFont(16)
  widget.addSpacer()
  let description = widget.addText("Remind me on opening the window")
  description.font = Font.mediumSystemFont(14)
  title.textColor = Color.white()
  description.textColor = Color.white()
  return widget
}

async function manageReminder() {
  let reminder = new Reminder()
  reminder.calendar = await getCalendar()
  reminder.title = "💨 Open the window"
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

