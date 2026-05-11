import PlayButton from "./PlayButton";
import PassingEventHandlerAsProps from "./PassingEventHandlerAsProps";


export default function ToolBar() {
  return (
    <div>
      <PlayButton movieNameProps="Inception"/>
      <br />
      <PassingEventHandlerAsProps/>
    </div>
  );
}
