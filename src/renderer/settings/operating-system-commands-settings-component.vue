<template>
  <div v-if="visible">
    <div class="settings__setting-title title is-3">
      <span>
        {{ translations.operatingSystemCommands }}
      </span>
      <div>
        <plugin-toggle
          :is-enabled="config.operatingSystemCommandsOptions.isEnabled"
          :toggled="toggleEnabled"
        />
        <button class="button" @click="resetAll">
          <span class="icon">
            <i class="fas fa-undo-alt"></i>
          </span>
        </button>
      </div>
    </div>
    <p
      class="settings__setting-description"
      v-html="translations.operatingSystemCommandsSettingsDescription"
    ></p>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import vueEventDispatcher from "../vue-event-dispatcher";
import VueEventChannels from "../vue-event-channels";
import PluginSettings from "./plugin-settings";
import { UserConfigOptions } from "../../common/config/user-config-options";
import { defaultOperatingSystemCommandsOptions } from "../../common/config/operating-system-commands-options";
import { TranslationSet } from "../../common/translation/translation-set";
import {
  UserConfirmationDialogParams,
  UserConfirmationDialogType
} from "./modals/user-confirmation-dialog-params";
import { deepCopy } from "../../common/helpers/object-helpers";

export default Vue.extend({
  data() {
    return {
      settingName: PluginSettings.OperatingSystemCommands,
      visible: false
    };
  },
  methods: {
    toggleEnabled() {
      const { config }: { config: UserConfigOptions } = this;
      config.operatingSystemCommandsOptions.isEnabled = !config
        .operatingSystemCommandsOptions.isEnabled;
      this.updateConfig();
    },
    resetAll() {
      const { translations }: { translations: TranslationSet } = this;
      const userConfirmationDialogParams: UserConfirmationDialogParams = {
        callback: () => {
          const { config }: { config: UserConfigOptions } = this;
          config.operatingSystemCommandsOptions = deepCopy(
            defaultOperatingSystemCommandsOptions
          );
          this.updateConfig();
        },
        message: translations.resetPluginSettingsToDefaultWarning,
        modalTitle: translations.resetToDefault,
        type: UserConfirmationDialogType.Default
      };
      vueEventDispatcher.$emit(
        VueEventChannels.settingsConfirmation,
        userConfirmationDialogParams
      );
    },
    updateConfig() {
      vueEventDispatcher.$emit(VueEventChannels.configUpdated, this.config);
    }
  },
  mounted() {
    vueEventDispatcher.$on(
      VueEventChannels.showSetting,
      (settingName: string) => {
        if (this.settingName === settingName) {
          this.visible = true;
        } else {
          this.visible = false;
        }
      }
    );
  },
  props: ["config", "translations"]
});
</script>
