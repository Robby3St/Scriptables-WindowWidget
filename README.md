# Scriptables

<h2>Anwendung</h2>

Dieses Widget-Script ist dafür gedacht das regelmäßige Stoßlüften zu vereinfachen. Mit einem Tippen auf das Öffnen-Widget wird automatisch eine datierte Erinnerung in der "Erinnerungen"-App erstellt, die nach einer gewissen Minutenzahl gesetzt wird (Standard: 15 Minuten). Das Schließen-Widget ist standardmäßig auf 5 Minuten gesetzt. Die Zeiten können im Script mit der Variablen "minutes" individuell angepasst werden. 

<h2>Installation</h2>

Zum Installieren des Widgets müssen die Codes zum Schließen und Öffnen des Fensters als jeweils neues Script in Scriptable eingefügt werden. Als Test, ob das Script funktioniert, kann das Script ausgeführt werden. Es sollte sich nun eine Widget-Vorschau öffnen, die anzeigt, dass die Erinnerung erfolgreich eingerichtet wurde. Es kann passieren, dass eine Erlaubnis für Scriptable gesetzt werden muss, auf die Erinnerungen zuzugreifen. Diese Berechtigungsanfrage sollte während des Ausführens angezeigt werden. Wenn das Script erfolgreich ausgeführt wurde, befindet sich in der "Erinnerungen"-App eine neue Erinnerungsgruppe mit dem Namen "Lüften" und je nach Open- oder Close-Script ist auch eine neue Erinnerung enthalten (sofern die Berechtigung beim Ausführen des Scripts gesetzt wurde, muss eventuell das Script ein weiteres Mal ausgeführt werden). 
Um ein Widget als Trigger-Button zum Ausführen des Scriptes zu verwenden, muss auf dem Homescreen ein neues Scriptable-Widget hinzugefügt werden. Mit einem langen Drücken auf das Widget (im Homescreen-Bearbeitungsmodus ein kurzes Antippen) kann das Widget bearbeitet werden. Hier wird das entsprechende Script zum Öfnnen oder Schließen des Fensters ausgewählt. Zusätzlich muss die <b>Option "When interacting" auf "Run Script"</b> umgestellt werden. Beim Tippen auf das Widget sollte nun das Script ausgeführt werden und das Widget dient als Knopf zum Erstellen einer Erinnerung für das Stoßlüften. 
