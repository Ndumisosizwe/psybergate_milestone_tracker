import { NgModule } from '@angular/core';

import { PsybergateMilestoneTrackerSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [PsybergateMilestoneTrackerSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [PsybergateMilestoneTrackerSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class PsybergateMilestoneTrackerSharedCommonModule {}
