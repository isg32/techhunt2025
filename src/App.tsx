import React, { useState, useRef, useEffect } from 'react';
import { Terminal } from 'lucide-react';
import hints from './preetylilhints';

interface CommandHistory {
  command: string;
  output: React.ReactNode;
}

function App() {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<CommandHistory[]>([]);
  const bottomRef = useRef<HTMLDivElement>(null);

  const commands = {
    help: () => (
      <div className="text-green-400">
        <p>Available commands:</p>
        <ul className="ml-4">
          <li>• help - Show this help message</li>
          <li>• rules - View competition rules</li>
          <li>• about - Learn about Tech Hunt</li>
          <li>• schedule - View event schedule</li>
          <li>• findme - help you need, you say when</li>
          <li>• iamfeelinglucky - ain't a command, just type a number 1-20 </li>
          <li>• clear - Clear terminal</li>
        </ul>
      </div>
    ),
    about: () => (
      <div className="text-green-400">
        <p>Debug And Discover - The Ultimate Technical Treasure Hunt</p>
        <p className="mt-2">
          Join us for an exciting journey through the digital realm where your technical
          skills and problem-solving abilities will be put to the ultimate test.
        </p>
        <p className="mt-2">
          🏆 Prize Pool: ₹3,000
          <br />
          📅 Date: February 25, 2025
          <br />
          📍 Location: Virtual + On-Campus
        </p>
      </div>
    ),
    findme: () => (
      <div className="text-green-400">
        <p>AS YOU CAN SEE, HERE IS THE TOOLS YOU NEED</p>
        <p className="mt-2">
          📱 : https://nemulator.vercel.app/
          <br />
          🩺 : https://stylesuxx.github.io/steganography/
          <br />
          🧠 : https://www.google.com
        </p>
      </div>
    ),
    rules: () => (
      <div className="text-green-400">
        <p>Competition Rules:</p>
        <ul className="ml-4">
          <li>• Teams of 4 members</li>
          <li>• All participants must be current college students</li>
          <li>• Multiple rounds of increasing difficulty</li>
          <li>• No Extra time will be provided</li>
          <li>• Use of AI tools is <strike>prohibited</strike> Allowed</li>
          <li>• THERE WILL BE ONLY ONE WINNER</li>
        </ul>
      </div>
    ),
    register: () => (
      <div className="text-green-400">
        <p>Registration Information:</p>
        <p className="mt-2">
          Regular Registration: ₹50/Person
          <br />
          Registration Deadline: February 21, 2025
        </p>
        <p className="mt-2">
          Register at: <span className="underline">techhunt2025.com/register</span>
        </p>
      </div>
    ),
    schedule: () => (
      <div className="text-green-400">
        <p>Event Schedule:</p>
        <p className="mt-2">
          February 25:
          <br />
          09:45 - Reporting Time
          <br />
          10:30 - Event Starts
          <br />
          16:00 - Event Ends
        </p>
      </div>
    ),

    //############################
    // The Lucky List Starts 
    //############################

    1: () => (
      <div className="text-green-400">
        <p>ljka np sjrxb ujju axxy qjrw vnxn, yjz tkvzkj wjrq. ora ujpjwnn lx kqr vnxw sjulc wjrq, yjz kdskjwj lkjq cn vdwqrbj cxa kdskj ljrwc qx - qjz pqjz vn qxcr qd, tkml wj tkml tjjv jjjc qj - kxux vnxw tkxd qd</p>
      </div>
    ),
    2: () => (
      <div className="text-green-400">
        <p>Under the cargo, near the lifeline, where the wounds see the daylight</p>
      </div>
    ),
    3: () => (
      <div className="text-green-400">
        <p>Under the word of led zeppelin's best guitar solo, a range of numbers leading to the glory hole</p>
      </div>
    ),
    4: () => (
      <div className="text-green-400">
        <p>Is the corridor between the two colleges, which includes free grand view of atheltes - dhyan se dekho raaste k dono taraf - aur fir tum pao ge square dhakkan - vaha pao ge tumhari manzil</p>
      </div>
    ),
    5: () => (
      <div className="text-green-400">
        <p>nothing around me, nothing above me - I alone am the honoured one standing among the heaven and earth</p>
      </div>
    ),
    6: () => (
      <div className="text-green-400">
        <p>yaha vaha jagha hai jaha milega sal ka praachin raaz, jiske saamne dikhega aapko mudrit karne ka dwar</p>
      </div>
    ),
    7: () => (
      <div className="text-green-400">
        <p>I stand strong, but I am fragile too, a single blow can see me through I'm meant to keep things of aathletes in or out, but violence makes me fall about what am I</p>
      </div>
    ),
    8: () => (
      <div className="text-green-400">
        <p>Abhi toh shuru hua hai yeh safar, 0 pe hi hai sabki nazar, manzil toh dur hai, par hosala bhuland, har kadam ek nayi kahani, har mod ek naya anand</p>
      </div>
    ),
    9: () => (
      <div className="text-green-400">
        <p>Aapki hint chuppi hai uske niche , jaha result deneka kona hai , jaha har yaari ka afsana sona hai, kahi roll number , kahi grades ki baatein aur kahi paiso ki mulaqatein</p>
      </div>
    ),
    10: () => (
      <div className="text-green-400">
        <p>Khula ground, moonlight tight, MJ ki beat, sabke peir hil rahe feeling so sweet</p>
      </div>
    ),
    11: () => (
      <div className="text-green-400">
        <p>Kagaz pe likha , ya digital file, carbon copy par karega, sab kuch versatile</p>
      </div>
    ),
    12: () => (
      <div className="text-green-400">
        <p>Ghar banane ke liye hume bulate ho, One touch karke phone ghumate ho, agar na aaye hum toh hume rulate ho aur phir yaha pe chit chupate ho</p>
      </div>
    ),
    13: () => (
      <div className="text-green-400">
        <p>Dil me aarman hai, jaun videsh, par visa board k saamne ki line - jaise lambi race - gitaboo ki duniya me kho jau, par ye duniya kaise mein seh pau</p>
      </div>
    ),
    14: () => (
      <div className="text-green-400">
        <p>Khamosh hain ye high tension board - par khatra hai gehra, Board hai muda hua par deta hai ye pehra</p>
      </div>
    ),
    15: () => (
      <div className="text-green-400">
        <p>Badi buildings design kamal - par choti matki ki saadgi deti hai aaram be hisaab</p>
      </div>
    ),
    16: () => (
      <div className="text-green-400">
        <p>Under the cargo, near the lifeline, where the wounds see the daylight</p>
      </div>
    ),
    17: () => (
      <div className="text-green-400">
        <p>Under the cargo, near the lifeline, where the wounds see the daylight</p>
      </div>
    ),
    18: () => (
      <div className="text-green-400">
        <p>Under the cargo, near the lifeline, where the wounds see the daylight</p>
      </div>
    ),
    19: () => (
      <div className="text-green-400">
        <p>Under the cargo, near the lifeline, where the wounds see the daylight</p>
      </div>
    ),
    20: () => (
      <div className="text-green-400">
        <p>Under the cargo, near the lifeline, where the wounds see the daylight</p>
      </div>
    ),

    //############################
    // The Lucky List Starts 
    //############################

    clear: () => {
      setHistory([]);
      return <div></div>;
    },
  };

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  useEffect(() => {
    // Show help command output on initial load
    setHistory([{ command: 'help', output: commands.help() }]);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedInput = input.trim().toLowerCase();
    
    if (trimmedInput) {
      if (trimmedInput === 'clear') {
        commands.clear();
      } else {
        const newEntry: CommandHistory = {
          command: input,
          output: commands[trimmedInput as keyof typeof commands]?.() || (
            <span className="text-red-500">
              Command not found. Type 'help' for available commands.
            </span>
          ),
        };
        
        setHistory((prev) => [...prev, newEntry]);
      }
      setInput('');
    }
  };

  return (
    <div className="min-h-screen bg-black text-green-400 p-4 font-mono">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-2 mb-6">
          <Terminal className="w-8 h-8" />
          <h1 className="text-2xl font-bold">Tech Hunt 2025 Terminal</h1>
        </div>

        <div className="bg-gray-900 rounded-lg p-4 min-h-[80vh] flex flex-col">
          <div className="flex-1 overflow-y-auto">
            {history.map((entry, index) => (
              <div key={index} className="mb-4">
                <div className="flex items-center gap-2">
                  <span className="text-green-400">$</span>
                  <span>{entry.command}</span>
                </div>
                <div className="ml-4 mt-2">{entry.output}</div>
              </div>
            ))}
            <div ref={bottomRef} />
          </div>

          <form onSubmit={handleSubmit} className="mt-4 flex items-center gap-2">
            <span className="text-green-400">$</span>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 bg-transparent border-none outline-none text-green-400 focus:ring-0"
              autoFocus
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;