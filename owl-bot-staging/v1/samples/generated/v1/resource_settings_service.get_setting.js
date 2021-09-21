// Copyright 2021 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.


'use strict';

function main(name) {
  // [START resourcesettings_get_setting_sample]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The name of the setting to get. See [Setting][google.cloud.resourcesettings.v1.Setting] for naming
   *  requirements.
   */
  // const name = 'abc123'
  /**
   *  The SettingView for this request.
   */
  // const view = ''

  // Imports the Resourcesettings library
  const {ResourceSettingsServiceClient} = require('@google-cloud/resource-settings').v1;

  // Instantiates a client
  const resourcesettingsClient = new ResourceSettingsServiceClient();

  async function getSetting() {
    // Construct request
    const request = {
      name,
    };

    // Run request
    const response = await resourcesettingsClient.getSetting(request);
    console.log(response);
  }

  getSetting();
  // [END resourcesettings_get_setting_sample]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
