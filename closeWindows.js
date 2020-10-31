// This widget can handle your reminders for opening windows schedueled.
// Please keep in mind that I haven't optimised the code yet. But maybe it can help you to keep an eye on your windows to
// minimize the Corona infection risk.

let minutes = 5
let titleFontSize = 22

manageInfoWidget()
if(!config.runsInWidget) {
  manageReminder()
}

Script.setWidget(await manageHomeWidget())
Script.complete()

async function manageInfoWidget() {
  let widget = new ListWidget()
  widget.backgroundColor = Color.blue()
  let title = widget.addText(" Close".toUpperCase())
  title.font = Font.boldRoundedSystemFont(titleFontSize)
  widget.addSpacer()
  let description = widget.addText("✅ Erinnerung eingerichtet (schließen)")
  description.font = Font.mediumSystemFont(14)
  title.textColor = Color.white()
  description.textColor = Color.white()
  widget.presentSmall()
}

async function manageHomeWidget() {
  let widget = new ListWidget()
  widget.backgroundColor = Color.blue()
  let title = widget.addText(" Close".toUpperCase())
  title.font = Font.boldRoundedSystemFont(titleFontSize)
  widget.addSpacer()
  let description = widget.addText("An Fenster schließen erinnern")
  description.font = Font.mediumSystemFont(14)
  title.textColor = Color.white()
  description.textColor = Color.white()
  return widget
}

async function manageReminder() {
  let reminder = new Reminder()
  reminder.calendar = await getCalendar()
  reminder.title = "Fenster schließen"
  reminder.dueDate = await getReminderDate()
  reminder.save()
}

async function getCalendar() {
  let c = Calendar.findOrCreateForReminders("Lüften")
  return c
}

async function getReminderDate() {
  let d = new Date(Date.now() + (1000 * 60 * minutes))
  return d
}
