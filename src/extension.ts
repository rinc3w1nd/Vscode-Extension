import * as vscode from "vscode";
import { TelemetryInitializer } from "./telemetry";

export async function activate(context: vscode.ExtensionContext): Promise<void> {
  const telemetryInitializer = new TelemetryInitializer(context);
  await telemetryInitializer.init();

  context.subscriptions.push({ dispose: () => undefined });
}

export function deactivate(): void {
  // nothing to dispose yet
}
