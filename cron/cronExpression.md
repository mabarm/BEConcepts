# Cron Expression Syntax:

A cron expression is made up of five fields, each representing a time value, followed by the command to run:

- - - - - <command>

---

| | | | |
| | | | +---- Day of the week (0 - 7) (Sunday=0 or 7)
| | | +------ Month (1 - 12)
| | +-------- Day of the month (1 - 31)
| +---------- Hour (0 - 23)
+------------ Minute (0 - 59)

- means "every" value for that field (e.g., every minute, every hour).

* Example Cron Expressions:
  0 0 \* \* _ /path/to/script.sh: Runs a script every day at midnight (12:00 AM).
  30 8 _ _ 1 /path/to/backup.sh: Runs every Monday at 8:30 AM.
  0 _/2 \* \* \* /path/to/job.sh: Runs every 2 hours.

<br />

# Creating and Managing Cron Jobs:

1. Open the Crontab file: You can edit the list of cron jobs by opening the crontab using the following command in your terminal: crontab -e

2. Add a Cron Job: In the crontab editor, you can add a new cron job by specifying the cron expression and the command/script you want to run.
   Example to run a script every day at 7:00 AM:
   0 7 \* \* \* /home/user/scripts/backup.sh
3. Save and Exit: After adding the job, save the file and exit. Cron will automatically load the new job.

4. Viewing Your Cron Jobs: crontab -l
   This will display all the scheduled cron jobs for your user.

5. Disabling or Removing a Cron Job:
   You can either: Comment out the job by placing a # at the beginning of the line in the crontab or remove the job completely by deleting the line.
6. To remove all cron jobs, run: crontab -r

<br />

# Example Cron Jobs:

Here are a few examples of cron jobs and their schedules:

1. Run a script every day at 2:00 AM:
   0 2 \* \* \* /path/to/script.sh

2. Run a command every Monday at 8:00 AM:
   0 8 \* \* 1 /path/to/command

3. Run a script every 5 minutes:
   _/5 _ \* \* \* /path/to/script.sh
