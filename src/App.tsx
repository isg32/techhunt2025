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
          <li>• stain - Returns how to get images for steganography</li>
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
    
    stain: () => (
      <div className="text-green-400">
      <p>Enter '[GivenCode]' to fetch your image
        <br /> <br />
        Note: Make sure the image does not get processed through any medium such as 
        <br />
        telegram or whatsapp - which will cause issue in decoding.
      </p>
      </div>
    ),

    mrbeast: () => (
      <div className="text-green-400">
        <p>Image to your steganography'd image:</p>
        <p className="mt-2">
        https://raw.githubusercontent.com/isg32/techhunt2025/main/images/cargos.png
        </p>
      </div>
    ),
    brokeboy32: () => (
      <div className="text-green-400">
        <p>Image to your steganography'd image:</p>
        <p className="mt-2">
        https://raw.githubusercontent.com/isg32/techhunt2025/main/images/corridor.png
        </p>
      </div>
    ),
    shedidntlaugh: () => (
      <div className="text-green-400">
        <p>Image to your steganography'd image:</p>
        <p className="mt-2">
        https://raw.githubusercontent.com/isg32/techhunt2025/main/images/firstfloor.png
        </p>
      </div>
    ),
    mimba: () => (
      <div className="text-green-400">
        <p>Image to your steganography'd image:</p>
        <p className="mt-2">
        https://raw.githubusercontent.com/isg32/techhunt2025/main/images/jaagteraho.png
        </p>
      </div>
    ),
    speedwagonwasthebest: () => (
      <div className="text-green-400">
        <p>Image to your steganography'd image:</p>
        <p className="mt-2">
        https://raw.githubusercontent.com/isg32/techhunt2025/main/images/mudrit.png
        </p>
      </div>
    ),
    amongus: () => (
      <div className="text-green-400">
        <p>Image to your steganography'd image:</p>
        <p className="mt-2">
        https://raw.githubusercontent.com/isg32/techhunt2025/main/images/pointbreak.png
        </p>
      </div>
    ),
    ilikegettingtouchedbyolderwomen: () => (
      <div className="text-green-400">
        <p>Image to your steganography'd image:</p>
        <p className="mt-2">
        https://raw.githubusercontent.com/isg32/techhunt2025/main/images/shewontcumback.png
        </p>
      </div>
    ),
    idatebrunettes: () => (
      <div className="text-green-400">
        <p>Image to your steganography'd image:</p>
        <p className="mt-2">
        https://raw.githubusercontent.com/isg32/techhunt2025/main/images/tightmoonlight.png
        </p>
      </div>
    ),
    jupiterisbetterthanactiva: () => (
      <div className="text-green-400">
        <p>Image to your steganography'd image:</p>
        <p className="mt-2">
        https://raw.githubusercontent.com/isg32/techhunt2025/main/images/visa.png
        </p>
      </div>
    ),
    whatislovebabydonthurtme: () => (
      <div className="text-green-400">
        <p>Image to your steganography'd image:</p>
        <p className="mt-2">
        https://raw.githubusercontent.com/isg32/techhunt2025/main/images/zepplin.png
        </p>
      </div>
    ),

    // DONE

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