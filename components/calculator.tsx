"use client";
import React, { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { ModeToggle } from "./modeToggle";

const Calculator = () => {
  const [result, setResult] = useState("");
  const handleClick = (value: any) => {
    if (value === "=") {
      try {
        setResult(eval(result) || "");
      } catch (error) {
        if (error instanceof SyntaxError) {
          setResult("Syntax Error");
        } else if (error instanceof ReferenceError) {
          setResult("Reference Error");
        } else {
          setResult("Unknown Error");
        }
      }
    } else if (value === "C") {
      setResult("");
    } else if (value === "CE") {
      setResult(result.slice(0, -1));
    } else {
      setResult(result + value);
    }
  };
  return (
    <div>
      <h1 className="text-center text-2xl font-medium dark:text-zinc-100 text-zinc-900 backdrop-blur-sm">
        CALCULATOR
      </h1>
      <div className="max-w-[25rem] m-auto p-[2rem] border-r-10 shadow-lg dark:shadow-md dark:bg-zinc-800/10">
        <Input
          type="text"
          className="mb-3 placeholder:opacity-20 "
          value={result}
          readOnly
          placeholder="0"
        />
        <div className="grid grid-cols-4 gap-3">
          <Button
            variant={"ghost"}
            className="hover:bg-zinc-500/20 text-[1.4rem]"
            onClick={() => handleClick("7")}
          >
            7
          </Button>
          <Button
            variant={"ghost"}
            className="hover:bg-zinc-500/20 text-[1.4rem]"
            onClick={() => handleClick("8")}
          >
            8
          </Button>
          <Button
            variant={"ghost"}
            className="hover:bg-zinc-500/20 text-[1.4rem]"
            onClick={() => handleClick("9")}
          >
            9
          </Button>
          <Button
            variant={"ghost"}
            className="text-[1.4rem] font-semibold  hover:bg-zinc-500/20"
            onClick={() => handleClick("CE")}
          >
            CE
          </Button>
          <Button
            variant={"ghost"}
            className="hover:bg-zinc-500/20 text-[1.4rem]"
            onClick={() => handleClick("4")}
          >
            4
          </Button>
          <Button
            variant={"ghost"}
            className="hover:bg-zinc-500/20 text-[1.4rem]"
            onClick={() => handleClick("5")}
          >
            5
          </Button>
          <Button
            variant={"ghost"}
            className="hover:bg-zinc-500/20 text-[1.4rem]"
            onClick={() => handleClick("6")}
          >
            6
          </Button>
          <Button
            variant={"ghost"}
            className="text-[1.4rem] font-semibold hover:bg-zinc-500/20"
            onClick={() => handleClick("/")}
          >
            /
          </Button>
          <Button
            variant={"ghost"}
            className="hover:bg-zinc-500/20 text-[1.4rem]"
            onClick={() => handleClick("1")}
          >
            1
          </Button>
          <Button
            variant={"ghost"}
            className="hover:bg-zinc-500/20 text-[1.4rem]"
            onClick={() => handleClick("2")}
          >
            2
          </Button>
          <Button
            variant={"ghost"}
            className="hover:bg-zinc-500/20 text-[1.4rem]"
            onClick={() => handleClick("3")}
          >
            3
          </Button>
          <Button
            variant={"ghost"}
            className="text-[1.4rem] font-semibold hover:bg-zinc-500/20"
            onClick={() => handleClick("*")}
          >
            *
          </Button>
          <Button
            variant={"ghost"}
            className="hover:bg-zinc-500/20 text-[1.4rem]"
            onClick={() => handleClick("0")}
          >
            0
          </Button>
          <Button
            variant={"ghost"}
            className="hover:bg-zinc-500/20 text-[1.4rem]"
            onClick={() => handleClick(".")}
          >
            .
          </Button>
          <Button
            variant={"ghost"}
            className="hover:bg-zinc-500/20 text-[1.4rem]"
            onClick={() => handleClick("00")}
          >
            00
          </Button>
          <Button
            variant={"ghost"}
            className="text-[1.4rem] font-semibold hover:bg-zinc-500/20"
            onClick={() => handleClick("-")}
          >
            -
          </Button>
          <Button
            variant={"ghost"}
            className="text-[1.4rem] font-semibold grid-cols-2 hover:bg-zinc-500/20"
            id="clear"
            onClick={() => handleClick("C")}
          >
            C
          </Button>
          <Button
            variant={"ghost"}
            className="text-[1.4rem] font-semibold hover:bg-zinc-500/20"
            onClick={() => handleClick("=")}
          >
            =
          </Button>
          <Button
            variant={"ghost"}
            className="text-[1.4rem] font-semibold hover:bg-zinc-500/20"
            onClick={() => handleClick("+")}
          >
            +
          </Button>
          <div className="ml-3">
            <ModeToggle />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
