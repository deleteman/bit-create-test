import { EnvsMain, EnvsAspect } from '@teambit/envs'
import { NodeAspect, NodeMain } from '@teambit/node'

export class CustomNodeEnvExtension {
  constructor(private node: NodeMain) {}

  static dependencies: any = [EnvsAspect, NodeAspect]

  static async provider([envs, node]: [EnvsMain, NodeMain]) {
    const CustomNodeEnvEnv = node.compose([
      /*
        Use any of the "node.override..." transformers to
      */
    ])

    envs.registerEnv(CustomNodeEnvEnv)

    return new CustomNodeEnvExtension(node)
  }
}
