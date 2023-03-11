import pyttsx3  #text to speech module
import datetime
import speech_recognition as sr
import wikipedia 
import smtplib #inbuilt for email
import webbrowser as wb

engine=pyttsx3.init() #call inittialfunction of pyttx3

def speak(audio):
    engine.say(audio)
    engine.runAndWait()

def time():
    Time=datetime.datetime.now().strftime("%I:%M:%S")
    speak("the current time is")
    speak(Time)

def date():
    year = str(datetime.datetime.now().year) #typecast to integer
    month = str(datetime.datetime.now().month)
    date = str(datetime.datetime.now().day)
    speak("the current date is ")
    speak(date)
    speak(month)
    speak(year)

def wishme():
    speak("Welcome")
    # time()
    # date()
    hour=int(datetime.datetime.now().hour)
    if hour>=6 and hour <12:
        speak("Good morning sir")
    elif hour >=12 and hour< 18:
        speak("Good afternoon sir")
    elif hour >= 18 and hour <24:
        speak("Good evening sir")
    else:
        speak("Good night sir")
    speak("Jarvis at your service Please tell me how can I help you?")

def takeCommand():
    r = sr.Recognizer()
    with sr.Microphone() as source:
        print("Listening..")
        r.pause_threshold = 1
        audio=r.listen(source)

    try:
        print("Recognizing...")
        query = r.recognize_google(audio, language='en-in')
        print(query)

    except Exception as e:
        print(e)
        speak("say that again please")
        return "None"
        
    return query

def sendEmail(to,content):
    server= smtplib.SMTP('smtp.gmail.com',587)
    server.ehlo()
    server.starttls()
    server.login('aplaproject25@gmail.com','Project@2025')
    server.sendmail('aplaproject25@gmail.com', to, content)
    server.close()


if __name__ == "__main__":
    wishme()
    while True:
        query = takeCommand().lower()

        if 'time' in query:
            time()

        elif 'date' in query:
            date()
        elif 'offline' in query:
            quit()
        elif 'wikipedia' in query:
            speak("Searching")
            query = query.replace("wikipedia","")
            result= wikipedia.summary(query,sentences=2)
            print(result)
            speak(result)
        elif 'send email' in query:
            try:
                speak("What should I say?")
                content= takeCommand()
                to = 'aplaproject25@gmail.com'
                sendEmail(to,content)
                speak("Email was sent successfully")
            except Exception as e:
                print(e)
                speak("Unable to send email")
        elif 'chrome' in query:
            speak("What should i search?")
            chromepath = '/Applications/Google Chrome.app'
            search = takeCommand().lower()
            wb.get(chromepath).open_new_tab(search + '.com')




        





