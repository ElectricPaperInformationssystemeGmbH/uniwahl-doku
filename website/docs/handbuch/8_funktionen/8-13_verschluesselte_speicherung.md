---
title: "Verschlüsselte Speicherung"
---

Die whl- und wvz-Dateien werden im Standard verschlüsselt gespeichert. Dafür wird ein AES-CBC-Algorithmus angewendet. Das Passphrase (AES-Key) wird generiert und im Code in verschlüsselter Form abgelegt. Zur Verschlüsselung des AES-Schlüssels wird ein RSA-Publik-Key verwendet.

Die unverschlüsselte Speicherung ist ebenso möglich. Im Menü `Funktionen` kann die Option „Unverschlüsselte Speicherung erlauben“ aktiviert werden (→ Abb.).

Wenn diese gesetzt wird, erscheint ein zusätzlicher Menüeintrag `Speichern (unverschlüsselt) unter...` im Menü `Datei.` Die unverschlüsselte Datei bekommt beim Speichern einen Postfix „unverschlüsselt“, um sie von der verschlüsselten Datei zu unterscheiden.
