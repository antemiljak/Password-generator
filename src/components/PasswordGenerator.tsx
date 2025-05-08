import usePasswordStore from "../store";
import { motion } from "framer-motion";

const PasswordGenerator = () => {
  const {
    length,
    setLength,
    includeNumbers,
    toggleNumbers,
    includeSymbols,
    toggleSymbols,
    includeUpperCase,
    toggleUpperCase,
    includeLowerCase,
    toggleLowerCase,
    generatedPassword,
    generatePassword,
  } = usePasswordStore();

  const handleGeneratePassword = () => generatePassword();
  return (
    <div>
      <div className="p-8 w-[40rem] mx-auto bg-white shadow-lg rounded-lg">
        <h1 className="text-2xl font-bold mb-4">Password Generator</h1>
        <div className="flex flex-col gap-4">
          <div>
            <label
              htmlFor="length"
              className="block text-sm font-semibold text-gray-700"
            >
              Password Lenght
            </label>
            <input
              type="number"
              id="length"
              value={length}
              onChange={(e) => setLength(Number(e.target.value))}
              min={4}
              max={64}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              checked={includeNumbers}
              onChange={toggleNumbers}
            />
            <label className="ml-2 text-sm font-medium">Include Numbers</label>
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              checked={includeSymbols}
              onChange={toggleSymbols}
            />
            <label className="ml-2 text-sm font-medium">Include Symbols</label>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              checked={includeUpperCase}
              onChange={toggleUpperCase}
            />
            <label className="ml-2 text-sm font-medium">
              Include Uppercase Letters
            </label>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              checked={includeLowerCase}
              onChange={toggleLowerCase}
            />
            <label className="ml-2 text-sm font-medium">
              Include Lowercase Letters
            </label>
          </div>

          <motion.button
            onClick={handleGeneratePassword}
            className="px-4 py-2 font-semibold bg-indigo-500 rounded text-white"
            whileHover={{
              scale: 1.05,
              transition: {
                type: "spring",
                stiffness: 500,
                damping: 5,
              },
            }}
            whileTap={{
              scale: 0.9,
              transition: {
                type: "spring",
                stiffness: 500,
                damping: 5,
              },
            }}
          >
            Generate Password
          </motion.button>

          {generatedPassword && (
            <motion.div
              className="mt-4 p-4 bg-gray-100 rounded-lg"
              initial={{
                opacity: 0,
                scale: 0.5,
                rotate: -180,
                x: -100,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                rotate: 0,
                x: 0,
                transition: {
                  type: "spring",
                  stiffness: 300,
                  damping: 25,
                  delay: 0.3,
                },
              }}
            >
              <p className="text-lg break-all">{generatedPassword}</p>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PasswordGenerator;
