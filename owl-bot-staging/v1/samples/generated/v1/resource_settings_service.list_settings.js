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

function main(parent) {
  // [START resourcesettings_list_settings_sample]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The Cloud resource that parents the setting. Must be in one of the
   *  following forms:
   *  * `projects/{project_number}`
   *  * `projects/{project_id}`
   *  * `folders/{folder_id}`
   *  * `organizations/{organization_id}`
   */
  // const parent = 'abc123'
  /**
   *  Unused. The size of the page to be returned.
   */
  // const pageSize = 1234
  /**
   *  Unused. A page token used to retrieve the next page.
   */
  // const pageToken = 'abc123'
  /**
   *  The SettingView for this request.
   */
  // const view = ''

  // Imports the Resourcesettings library
  const {ResourceSettingsServiceClient} = require('@google-cloud/resource-settings').v1;

  // Instantiates a client
  const resourcesettingsClient = new ResourceSettingsServiceClient();

  async function listSettings() {
    // Construct request
    const request = {
      parent,
    };

    // Run request
    const iterable = await resourcesettingsClient.listSettingsAsync(request);
    for await (const response of iterable) {
        console.log(response);
    }
  }

  listSettings();
  // [END resourcesettings_list_settings_sample]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
