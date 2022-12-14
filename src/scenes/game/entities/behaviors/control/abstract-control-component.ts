import {IControlComponent} from "./IControlComponent";
import {AbstractComponent} from "../AbstractComponent";

abstract class AbstractControlComponent extends AbstractComponent implements IControlComponent {

    protected readonly _typeID: string = 'control';
    protected actionUpCallback: Function;
    protected actionDownCallback: Function;
    protected actionLeftCallback: Function;
    protected actionRightCallback: Function;
    protected actionSpaceCallback: Function;


    public onActionDown(callback: Function): void {
        this.actionDownCallback = callback;
    }

    public onActionLeft(callback: Function): void {
        this.actionLeftCallback = callback;
    }

    public onActionRight(callback: Function): void {
        this.actionRightCallback = callback;
    }

    public onActionSpace(callback: Function): void {
        this.actionSpaceCallback = callback;
    }

    public onActionUp(callback: Function): void {
        this.actionUpCallback = callback;
    }

    public triggerActionDown(): void {
        if (this.actionDownCallback) this.actionDownCallback();
    }

    public triggerActionLeft(): void {
        if (this.actionLeftCallback) this.actionLeftCallback();
    }

    public triggerActionRight(): void {
        if (this.actionRightCallback) this.actionRightCallback();
    }

    public triggerActionSpace(): void {
        if (this.actionSpaceCallback) this.actionSpaceCallback();
    }

    public triggerActionUp(): void {
        if (this.actionUpCallback) this.actionUpCallback();
    }

    public update(dt: number): void {}
}

export { AbstractControlComponent }